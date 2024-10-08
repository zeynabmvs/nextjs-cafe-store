import React from "react";
import { CartItemType } from "@/app/lib/definitions";
import Image from "next/image";
import { formatDollar } from "@/app/utils";

type CartItemProps = {
  item: CartItemType;
};

const OrderItem = (props: CartItemProps) => {
  const item = props.item;
  const cartItemTotal = item.quantity * item.product.price;

  return (
    <div className="flex gap-4 items-center border-b border-rose-100 pb-3 mb-3">
      <Image
        className="rounded-md w-[50px]"
        src={item.product.image.thumbnail}
        alt={item.product.name}
        width={100}
        height={96}
      />
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold">{item.product.name}</h3>
          <div className="text-sm">
            <span className="mr-4 text-red font-semibold">
              {item.quantity}x
            </span>
            <span className="mr-2 text-rose-300">
              @ {formatDollar(item.product.price)}
            </span>
          </div>
        </div>
        <span className="text-rose-500 font-semibold">
          {formatDollar(cartItemTotal)}
        </span>
      </div>
    </div>
  );
};

export default OrderItem;
