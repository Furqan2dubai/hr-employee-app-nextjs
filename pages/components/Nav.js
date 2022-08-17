import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import { useRouter } from 'next/router';
export default function Nav() {
  const router = useRouter();

  return ( 
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills"> 
          <li className="nav-item"> 
            <Link href="/">
              <a className={"nav-link " + (router.pathname == "/" ? "active" : "")}>Home</a>
            </Link>
          </li>
          <li className="nav-item"> 
            <Link href="/employee">
              <a className={"nav-link " + (router.pathname == "/employee" ? "active" : "")}>Employees</a>
            </Link>
          </li> 
        </ul>
      </header> 
  )
}
