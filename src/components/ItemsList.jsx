import Items from "./Items";
import PropTypes from 'prop-types';

const ItemsList = (props) => {

  const itemStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  };

  let currentInventory = props.inventory;

  return (
    <>
      <hr />
      <div style={itemStyle}>
        {currentInventory.map((coffee) => (
          <Items
            whenItemClicked={props.onItemSelection}
            onBuyPound={props.onBuyPound}
            onSellPound={props.onSellPound}
            id={coffee.id}
            description={coffee.description}
            origin={coffee.origin}
            price={coffee.price}
            roast={coffee.roast}
            qty={coffee.qty}
            totalBought={coffee.totalBought}
            key={coffee.id}
          />
        ))}
      </div>
    </>
  );
};

ItemsList.propTypes = {
  inventory: PropTypes.array,
  onItemSelection: PropTypes.func,
  onBuyPound: PropTypes.func,
};

export default ItemsList;