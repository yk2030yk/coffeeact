import React from 'react'

import bgSrc from '@/assets/images/homeHeader.jpg'
import { HomeHeaderPresenter } from './presenter'

export const HomeHeader: React.FC = () => <HomeHeaderPresenter bgSrc={bgSrc} />
