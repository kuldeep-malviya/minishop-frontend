import React from 'react'

const Contact = () => {
  return (


   <div className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <p className="fs-5 text-center mb-4">
            Have any questions or need support? Feel free to contact us.
          </p>

          <ul className="list-group">
            <li className="list-group-item">
              📧 <strong>Email:</strong> support@minishop.com
            </li>
            <li className="list-group-item">
              📞 <strong>Phone:</strong> +91 9165957984
            </li>
            <li className="list-group-item">
              📍 <strong>Location:</strong> India(dewas)
            </li>
            <li className="list-group-item">
              ⏰ <strong>Working Hours:</strong> Mon – Sat (9 AM – 9 PM)
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact