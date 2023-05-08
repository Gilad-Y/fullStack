import { Button, ButtonGroup, TextField, Typography } from "@mui/material";
import "./AddCategory.css";
import { useState } from "react";
import { Category } from "../../Modal/Category";

function AddCategory(): JSX.Element {
    // const [newCategory,setCategory]=useState("");
    let newCat="";
    const [categories,setCategories]=useState<Category[]>([]);
    const handleAddButton=()=>{
        let temp = categories;
        temp.push(new Category(categories.length+1,newCat));
        setCategories(temp);
        localStorage.setItem("Categories",JSON.stringify(temp));
    }
    return (
        <div className="AddCategory">
			<div className="box">
                <Typography variant="h4" className="Headline">
                    Add Category
                </Typography>
                <hr/>
                <TextField label="category name"variant="outlined"
                onBlur={(args)=>newCat=((args.target as HTMLInputElement).value)}/>
                <br/>
                <br/>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button color="primary" onClick={handleAddButton}>Add</Button>
                    <Button color="secondary">cancel</Button>
                </ButtonGroup>

            </div>
        </div>
    );
}

export default AddCategory;
