import React from 'react'

export default function ContactMap() {
  return (
    <div>
      <div className='service-map mb-55' id='contact-map'>
        <div style={{ width: '100%' }}>
          <iframe
            allowFullScreen=''
            height={400}
            loading='lazy'
            style={{ width: '100%' }}
            title='Contact'
            // eslint-disable-next-line max-len
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58403.623581008454!2d90.32726121307132!3d23.81054442359749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c1c61277db%3A0xc7d18838730e2e59!2z4Kau4Ka_4Kaw4Kaq4KeB4KawLCDgpqLgpr7gppXgpr4!5e0!3m2!1sbn!2sbd!4v1643621605621!5m2!1sbn!2sbd'
          ></iframe>
        </div>
      </div>
    </div>
  )
}
