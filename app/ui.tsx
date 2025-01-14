"use client";

import { Button, Input } from "@material-tailwind/react";
import Todo from "components/todo";
import { useState } from "node_modules/@types/react";

export default function UI() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="w-2/3 mx-auto flex flex-col items-center py-10 gap-2">
      <h1 className="text-xl">TODO LIST</h1>
      <Input
        label="Search TODO"
        placeholder="Search TODO"
        icon={<i className="fas fa-search" />}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <Todo />

      <Button>
        <i className="fas fa-plus mr-2" />
        Add TODO
      </Button>
    </div>
  );
}
