import React, { Fragment } from "react";
import AvailableMeals from "./AvailabieMeals";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
    return(
        <Fragment>
            <MealsSummary/>
            <AvailableMeals/>
        </Fragment>
    )
}

export default Meals;