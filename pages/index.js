import Head from "next/head";
import Image from "next/image";
import Html from "next/document";
import styles from "../styles/Home.module.css";
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import Card from './components/Card'

export default function Home() {
  const [enabled, setEnabled] = useState(false)


  return (
    <body>
      {/* container */}
      <div className="p-5">
        <h1 className="text-3xl font-bold pb-2">Social Media Dashboard</h1>
        <p className="text-gray pb-4">Total Followers: 23,004</p>
          <hr></hr>
        <div className="flex justify-between pt-5">
          <p>Dark Mode</p>
          <Switch checked={enabled} onChange={setEnabled}>
              <span className="block rounded-full shadow h-8 w-16 bg-gradient-to-l from-primary-test2 to-primary-test">
                <span
                  className={`block translate-x-5 bg-primary-Very-Light-Grayish-Blue shadow rounded-full h-full w-6/12 ${enabled ? "bg-red-500" : "bg-blue-500"}`}
                ></span>
              </span>
            </Switch>
        </div>
      </div>

       @nathanf 1044 Followers 99 Today
      @realnathanf 11k Followers 1099 Today Nathan F. 8239 Subscribers 144 Today
      Overview - Today Page Views 87 3% Likes 52 2% Likes 5462 2257% Profile
      Views 52k 1375% Retweets 117 303% Likes 507 553% Likes 107 19% Total Views
      1407 12%
    </body>
  );
}
