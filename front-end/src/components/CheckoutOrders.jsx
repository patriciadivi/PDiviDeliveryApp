// import React from 'react';

// function CheckoutOrders() {
//   return (
//     <table>
//     <thead>
//       <tr>
//         <th>Item</th>
//         <th>Descrição</th>
//         <th>Quantidade</th>
//         <th>Valor Unitário</th>
//         <th>Sub-total</th>
//         <th>Remover Item</th>
//       </tr>
//     </thead>
//     <tbody>
//       {Array.map((name, price, quantity }, i) => (
//         <tr key={ name }>
//           <td
//             data-testid={ `customer_checkout__element-order-table-item-number-${id}` }
//           >
//             {id}
//           </td>
//           <td data-testid={ `customer_checkout__element-order-table-name-${id}` }>
//             {name}
//           </td>
//           <td data-testid={ `customer_checkout__element-order-table-quantity-${id}` }>
//             {quantity}
//           </td>
//           <td
//             data-testid={ `customer_checkout__element-order-table-unit-price-${id}` }
//           >
//             {price}
//           </td>
//           <td data-testid={ `customer_checkout__element-order-table-sub-total-${id}` }>
//             {(Number(price * quantity))}
//           </td>
//           <td>
//             <button
//               type="button"
//               value={ name }
//               data-testid={ `customer_checkout__element-order-table-remove-${id}` }
//               onClick={ handleOnclickRemove }
//             >
//               {' '}
//               remover
//             </button>
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
//   <h2 data-testid="customer_checkout__element-order-total-price">
//     {`Total: {total}}`}
//   </h2>
// </>
//   );
// }

// export default CheckoutOrders;
