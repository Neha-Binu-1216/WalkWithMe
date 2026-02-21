import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function AlertCard({ alert }) {
  return (
    <Card className="my-4">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">{alert.title}</p>
          <p className="text-small text-default-500">{alert.location}</p>
        </div>
      </CardHeader>
      <CardBody>
        <p>{alert.description}</p>
      </CardBody>
    </Card>
  );
}