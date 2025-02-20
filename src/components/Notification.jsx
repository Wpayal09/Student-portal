import React from 'react'
import icon1 from '../assets/Images/icon1 (1).png'
import icon2 from '../assets/Images/icon2.png'
import icon3 from '../assets/Images/icon3.png'
import icon4 from '../assets/Images/icon4.png'
import icon5 from '../assets/Images/icon5.png'

const Notification = () => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg overflow-hidden shadow">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-lg font-semibold text-center">Notification</h2>
      </div>

      {/* Notification list */}
      <div className="divide-y divide-gray-200">
        {/* Notification 1 */}
        <div className="flex items-center p-4">
          <img
            src={icon1}
            alt="Avatar"
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div className="flex flex-col">
            <p className="text-sm font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>
            <span className="text-xs text-gray-500">1m ago</span>
          </div>
        </div>

        {/* Notification 2 */}
        <div className="flex items-center p-4">
          <img
            src={icon2}
            alt="Avatar"
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div className="flex flex-col">
            <p className="text-sm font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>
            <span className="text-xs text-gray-500">1m ago</span>
          </div>
        </div>

        {/* Notification 3 */}
        <div className="flex items-center p-4">
          <img
            src={icon3}
            alt="Avatar"
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div className="flex flex-col">
            <p className="text-sm font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>
            <span className="text-xs text-gray-500">1m ago</span>
          </div>
        </div>

        {/* Notification 4 */}
        <div className="flex items-center p-4">
          <img
            src={icon4}
            alt="Avatar"
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div className="flex flex-col">
            <p className="text-sm font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>
            <span className="text-xs text-gray-500">1m ago</span>
          </div>
        </div>

        {/* Notification 5 */}
        <div className="flex items-center p-4">
          <img
            src={icon5}
            alt="Avatar"
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div className="flex flex-col">
            <p className="text-sm font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>
            <span className="text-xs text-gray-500">1m ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification
