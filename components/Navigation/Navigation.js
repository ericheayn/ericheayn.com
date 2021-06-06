import React from 'react'
import Link from 'next/link'

import styles from './Navigation.module.css'

const items = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  { path: '/tools', label: 'Tools' }
]

export default function Navigation () {
  return (
    <nav className={styles.navigation}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={ item.path }>
              <a>{ item.label }</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
