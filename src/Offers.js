import { v4 as uuidv4 } from 'uuid';
const Offers = () => {

  const villas = [
    {
      id: uuidv4(),
      title: 'Villa sea view',
      address: {
        city: 'NY',
        street: 'Bay 23 street',
        building: 5,
      },
      price: 200,
      description: 'two bedroom sea view, 2000 sqft',
    },
    {
      id: uuidv4(),
      title: 'Villa mountain view',
      address: {
        city: 'LA',
        street: 'Park street',
        building: 15,
      },
      price: 300,
      description: 'three bedroom mountain view, 2100 sqft',
    },
    {
      id: uuidv4(),
      title: 'Villa ocean view',
      address: {
        city: 'Miamy',
        street: 'Court street',
        building: 10,
      },
      price: 400,
      description: 'four bedroom ocean view, 2200 sqft',
    },
  ];
  return (
    <div>
      <ul>
        {villas.map(el => (
          <li key={el.id}>
            <hr/>
            <strong>{el.title}</strong>
            <br/><i>{el.address.city + ' ' + el.address.street + ' ' + el.address.building}</i>
            <br/>{el.description}
            <br/>Price: $ {el.price}
          </li>
          )
        )
        }
      </ul>
    </div>
  );
};

export default Offers;