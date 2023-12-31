import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { Loader } from 'shared/ui/Loader/Loader'

export const AppRouter = () => (
    <Suspense fallback={<div style={{width: '100%'}}><Loader/></div>}>
        <Routes>
            {Object.values(routeConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={<div className={'page-wrapper'}>{element}</div>}
                />
            ))}
        </Routes>
    </Suspense>
)
