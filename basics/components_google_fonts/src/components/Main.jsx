import React from 'react'
import styles from '../style/main.module.css'

const Main = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.heading}>Fun facts about React</h1>
        <ul className={styles.ulist}>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jorden Walke</li>
            <li>Has well 100k stars on GitHub</li>
            <li>Is maintained by facebook</li>
            <li>Powers thousands of enterprices app including mobile apps</li>
        </ul>
    </div>
  )
}

export default Main