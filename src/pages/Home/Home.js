import React from 'react'
import Banner from '../../components/Banner/Banner'
import Club from '../../components/Club/Club'
import Courses from '../../components/Courses/Courses'
import Feature from '../../components/Feature/Feature'
import Premium from '../../components/Premium/Premium'
import Upcoming from '../../components/Upcoming/Upcoming'
import Welcome from '../../components/Welcome/Welcome'
import '../../components/Banner/Style.css'
import '../../components/Club/Style.css'
import '../../components/Courses/Style.css'
import '../../components/Feature/Style.css'
import '../../components/Premium/Style.css'
import '../../components/Welcome/Style.css'
import '../../components/Upcoming/Style.css'


export default function Home() {
  return (
    <div>
        <Banner />
        <Welcome />
        <Premium />
        <Upcoming />
        <Feature />
        <Club />
        <Courses />  
    </div>
  )
}
