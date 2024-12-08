/* eslint-disable react/display-name */
import { memo, Suspense } from 'react'

import type { FC, NamedExoticComponent } from 'react'

export const LoadComponent = <Props extends object, >(Component: FC<Props>):
    NamedExoticComponent<Props> => memo((props) => (
    <Suspense fallback={ <div /> }>
        <Component { ...props } />
    </Suspense>
))
