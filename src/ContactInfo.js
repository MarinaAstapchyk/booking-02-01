function ContactInfo(){
  const info =
    {
      name: 'Booking Incorporation',
      address:
        {
          city: 'LA',
          street: 'Las villas',
          building: 305,
        },
      phone: '345-245-64-54',
      email: 'bookimg@booking.com',
    }

  return (
    <div>
      <h3>{info.name}:</h3>
      {info.address.city}, {info.address.street}, {info.address.building}
      <hr/>
      <div><br/><strong>Our contacts:</strong>
        <br/>phone {info.phone}
        <br/>email {info.email}
      </div>

    </div>
  )
}
 export default ContactInfo;