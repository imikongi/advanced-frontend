import {classNames} from "shared/lib/classNames/classNames";
import cls from './AboutPage.module.scss'
import { useTranslation } from 'react-i18next'
import React from 'react'

interface AboutPageProps {
    className?: string
}

const AboutPage = ({className}: AboutPageProps) => {
    const { t } = useTranslation('about')
    return (
        <div className={classNames(cls.AboutPage, {}, [className])}>
           {t('О сайте')}
        </div>
    );
};

export default AboutPage


