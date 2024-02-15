import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export default function App() {
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        color="secondary"
        size="lg"
        classNames={{
          tabList:
            "w-full grid grid-cols-3 justify-center align-center p-0 bg-secondary",
          cursor: "w-full bg-secondary",
          tab: "w-full py-6  text-xl sm:text-2xl sm:py-6 md:text-3xl md:py-8",
          tabContent: "group-data-[selected=true]:text-foreground",
        }}
        disableAnimation="true"
      >
        <Tab key="photos" title="Gastos">
          <Card className="flex flex-row gap-6 justify-center align-center bg-transparent shadow-none">
            <CardBody className="text-center text-black text-xl bg-foreground rounded-xl">
              10,00
            </CardBody>
            <CardBody className="text-center text-black text-xl bg-foreground rounded-xl">
              10,00
            </CardBody>
            <CardBody className="text-center text-black text-xl bg-foreground rounded-xl">
              10,00
            </CardBody>
          </Card>
        </Tab>
        <Tab key="music" title="Ingreso">
          <Card className="flex flex-row gap-6 justify-center align-center bg-transparent shadow-none">
            <CardBody className="text-center text-black text-xl bg-foreground rounded-xl">
              20,00
            </CardBody>
            <CardBody className="text-center text-black text-xl bg-foreground rounded-xl">
              20,00
            </CardBody>
            <CardBody className="text-center text-black text-xl bg-foreground rounded-xl">
              20,00
            </CardBody>
          </Card>
        </Tab>
        <Tab key="videos" title="Saldo">
          <Card className="flex flex-row gap-6 justify-center align-center bg-transparent shadow-none">
            <CardBody className="text-center text-black text-xl bg-foreground rounded-xl">
              00,00
            </CardBody>
            <CardBody className="text-center text-black text-xl bg-foreground rounded-xl">
              00,00
            </CardBody>
            <CardBody className="text-center text-black text-xl bg-foreground rounded-xl">
              00,00
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
