import React from 'react';

const ListingCard = ({ listing }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-bold font-noto-sans-jp mb-2">{listing.title}</h3>
    <p className="font-noto-sans-jp text-gray-600 mb-1">所在地: {listing.location}</p>
    <p className="font-noto-sans-jp text-gray-600 mb-1">価格: {listing.price}</p>
    <p className="font-noto-sans-jp text-gray-600 mb-1">定員: {listing.capacity}名</p>
    <p className="font-noto-sans-jp text-gray-600">{listing.description}</p>
  </div>
);

export default ListingCard;
