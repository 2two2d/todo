import {string} from "yup";

const minMaxState = {
    name: { min: 1, max: 20 },
    text: { min: 1, max: 200 },
    color: { exact: 7 }
}

const messages = {
    required: 'Поле обязательно для заполнения',
    incorrectSymbols: 'Введены некорректные символы',
    colorExactLength: 'Указан неверный формат',
    min: (value: number): string => `Поле должно содержать от ${value} символов`,
    max: (value: number): string => `Поле должно содержать до ${value} символов`
}

const regExp = /^[0-9a-zA-Zа-яА-ЯёЁ ~.,;:\n!@#$%^&*()_+-=`'"№?{}[\]<>]+$/

const nameSchema = string().
    required(messages.required).
    min(minMaxState.name.min, messages.min(minMaxState.name.min)).
    max(minMaxState.name.max, messages.max(minMaxState.name.max)).
    matches(regExp, messages.incorrectSymbols)

const textSchema = string().
    required(messages.required).
    min(minMaxState.text.min, messages.min(minMaxState.text.min)).
    max(minMaxState.text.max, messages.max(minMaxState.text.max)).
    matches(regExp, messages.incorrectSymbols)

const colorSchema = string().
    required(messages.required).
    matches(
        new RegExp(/^#[0-9a-fA-F]{6}$/),
        messages.incorrectSymbols
    ).test(messages.colorExactLength, (value) => value.length === minMaxState.color.exact)

export {
    nameSchema,
    textSchema,
    colorSchema
}