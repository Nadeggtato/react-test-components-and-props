import React, { useState } from "react"
import { User } from '@/types/user'

export function UserData({user}: { user: User }) {
  return (
    <div>User { user.name } has the age of { user.age } and email { user.email }</div>
  )
}

export default function Home() {
  const [user, setUser] = useState<User>({ name: '', age: 0, email: ''})

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setUser((prev) => ({ ...prev, [id]: value }))
  }

  return (
    <div>
      <label htmlFor="name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Name
      </label>
      <input type="text"
        id="name"
        value={user.name}
        onChange={handleDataChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
          focus:border-blue-500 block w-half p-2.5 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />

      <label htmlFor="age"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Age
      </label>
      <input type="number"
        value={user.age}
        onChange={handleDataChange}
        id="age"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
          focus:border-blue-500 block w-half p-2.5 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />

      <label htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        E-mail
      </label>
      <input type="email"
        value={user.email}
        onChange={handleDataChange}
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-half p-2.5  dark:bg-gray-700 dark:border-gray-600
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      <UserData user={user}/>
    </div>
  );
}
