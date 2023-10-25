import Link from 'next/link'
import React from 'react'
import { logError } from '../utils/console'
import style from './page.module.css'

type TPokemon = {
  height: number
  name: string
  weight: number
}

function getData<T>(): Promise<T | null> {
  return fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then((res) => {
      if (!res.ok) {
        logError({ message: 'Failed to fetch data' })
        return null
      }
      return res.json() as Promise<T>
    })
    .catch((err: Error) => {
      logError({ message: err.message })
      return null
    })
}

const Home = async () => {
  const data = await getData<TPokemon>()

  return (
    <main className={style.main}>
      <div>
        <h1 className={style.title}>Demon Permission</h1>
        <div>
          <p className={style.menuTitle}>Menu</p>
          <nav className='navbar'>
            <ol className={style.menu}>
              <li>
                <Link href='/manager'>
                  <p className={style.menuItem}>Manager</p>
                </Link>
              </li>
              <li>
                <Link href='/user'>
                  <p className={style.menuItem}>User</p>
                </Link>
              </li>
              <li>
                <Link href='/authentication'>
                  <p className={style.menuItem}>Authentication</p>
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div>
        <h1 className={style.titleDemoFetch}>Demo SSR fetch data</h1>
        {data && (
          <div className={style.dataDemoFetch}>
            <p>Name: </p> <p>{data.name}</p>
            <p>Height: </p> <p>{data.height}</p>
            <p>Weight: </p> <p>{data.weight}</p>
          </div>
        )}
      </div>
    </main>
  )
}

export default Home
