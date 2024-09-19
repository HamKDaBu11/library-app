'use client'

import { Select, SelectItem } from "@nextui-org/react"
import { useState } from "react"


const Dropdown = (props: any) => {
    const [values, setValues] = useState(new Set([]))

    function handleSelectionChange(e: any) {
        props.addGenresFilter(e.target.value)
    }

    return (
        <Select
            label="Select an genre..."
            className="max-w-xs"
            selectionMode="single"
            selectedKeys={values}
            onChange={handleSelectionChange}
        >
            {props.genres.map((genre: any) => (
                <SelectItem key={genre.title}>
                    {genre.title}
                </SelectItem>
            ))}
        </Select>
    )
}

export default Dropdown
