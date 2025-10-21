import React from "react";
import Image from "next/image";
import { CardHeader, CardBody, Card, Button } from "@heroui/react";
import { products } from "@/constant/products";

const Products = () => {

    const handleDetails = (id) => {
        console.log(id)
    }

    return (
        <div className="">
            {products.map((product) => (
                <Card className="py-4" key={product.id}>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">
                            {product.name}
                        </p>
                        <small className="text-default-500">
                            amount: {product.amount}
                        </small>
                        <h4 className="font-bold text-large">
                            price: {product.price}
                        </h4>
                    </CardHeader>

                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src={product.img}
                            width={200}
                            height={200}
                        />
                        <Button onPress={()=>handleDetails(product.id)} className = "mt-2">Más detalles</Button>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
};

export default Products;