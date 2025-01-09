'use client'

import { type ReactNode, useEffect } from 'react'

import { useGetFeedbackModals } from '@features/render-modal/use-get-modals/feedback'

import { useModalState } from '@shared/lib/store'

import { useGetProfileModals } from '@features/render-modal/use-get-modals/profile'

import { useGetMyAdsModals } from '@features/render-modal/use-get-modals/my-ads-modals'

import { useGetProfileSafetyModals } from '@features/render-modal/use-get-modals/profile-safety'

import { useGetAuthModals } from '@features/render-modal/use-get-modals/auth'

import { useGetPublicationsModals } from '@features/render-modal/use-get-modals/publications'

import { useGetEditModals } from '@features/render-modal/use-get-modals/edit-modal'

import { useGetAddModals } from './use-get-modals/add-modal'

import { useGetConfirmModals } from './use-get-modals/confirm'

import { useGetChatModals } from './use-get-modals/chat'

import type { IGetModalsFuncProps } from './interface'

const RenderModal = ({ currentModalKey, params }: IGetModalsFuncProps): ReactNode => {
  const authModals = useGetAuthModals({ currentModalKey, params })
  const myAdsModals = useGetMyAdsModals({ currentModalKey, params })
  const profileModals = useGetProfileModals({ currentModalKey, params })
  const profileSafetyModals = useGetProfileSafetyModals({ currentModalKey, params })
  const addModals = useGetAddModals({ currentModalKey, params })
  const editModals = useGetEditModals({ currentModalKey, params })
  const confirmModals = useGetConfirmModals({ currentModalKey, params })
  const feedbackModals = useGetFeedbackModals({ currentModalKey, params })
  const chatModals = useGetChatModals({ currentModalKey, params })
  const publicationModals = useGetPublicationsModals({ currentModalKey, params })

  const { isModalOpen } = useModalState((state) => {
    return {
      isModalOpen: state.isModalOpen(currentModalKey),
      modalProps: state.modals[currentModalKey]
    }
  })

  useEffect(() => {
    if (!isModalOpen) {
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
    }
  }, [isModalOpen])

  const modals = {
    ...authModals,
    ...profileModals,
    ...profileSafetyModals,
    ...addModals,
    ...editModals,
    ...myAdsModals,
    ...confirmModals,
    ...feedbackModals,
    ...chatModals,
    ...publicationModals
  }

  return modals[currentModalKey as keyof typeof modals]
}

export { RenderModal }
