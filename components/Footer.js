import React from 'react'

const Footer = () => {
  return (
    <div className="text-grey-600 grid grid-cols-1 gap-y-10 bg-primary shadow-light-card px-32 py-14 md:grid-cols-4">
      <div className="space-y-4 text-xs text-primary-white">
        <h5 className="font-bold">About</h5>
        <p>How airbnb work</p>
        <p>newsroom</p>
        <p>Investor</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-primary-white">
        <h5 className="font-bold">Community</h5>
        <p>Airbnb.org: disaster relief housing</p>
        <p>Support Afghan refugees</p>
        <p>Combating discrimination</p>
      </div>

      <div className="space-y-4 text-xs text-primary-white">
        <h5 className="font-bold">Hosting</h5>
        <p>Try hosting</p>
        <p>AirCover for Hosts</p>
        <p>Explore hosting resources</p>
        <p>Visit our community forum</p>
        <p>How to host responsibly</p>
      </div>
      <div className="space-y-4 text-xs text-primary-white">
        <h5 className="font-bold">Support</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Supporting people with disabilitiese</p>
        <p>Our COVID-19 Response</p>
        <p>Report a neighbourhood concern</p>
      </div>
    </div>
  )
}

export default Footer
