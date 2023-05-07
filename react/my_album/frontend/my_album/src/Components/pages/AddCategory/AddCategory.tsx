import { Button, ButtonGroup, TextField, Typography } from "@mui/material";
import "./AddCategory.css";
import { useState } from "react";
import { Category } from "../../Modal/Category";

function AddCategory(): JSX.Element {
    const [newCategory,setCategory]=useState("");
    const [category,setCategories]=useState<Category[]>([]);
    const handleAddButton=()=>{

    }
    return (
        <div className="AddCategory">
			<div className="box">
                <Typography variant="h4" className="Headline">
                    Add Category
                </Typography>
                <hr/>
                <TextField label="category name"variant="outlined"
                onKeyUp={(args)=>setCategory(args.)}/>
                <br/>
                <br/>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button color="primary">Add</Button>
                    <Button color="secondary">cancel</Button>
                </ButtonGroup>

            </div>
        </div>
    );
}

export default AddCategory;
