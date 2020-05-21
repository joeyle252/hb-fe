
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function Filters() {
    return (
        <>

            <FormControl component="fieldset">
                <FormLabel component="legend">Star Rating</FormLabel>
                <FormGroup aria-label="position" column>
                    <FormControlLabel
                        value="end"
                        control={<Checkbox color="primary" />}
                        label="End"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="end"
                        control={<Checkbox color="primary" />}
                        label="End"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="end"
                        control={<Checkbox color="primary" />}
                        label="End"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="end"
                        control={<Checkbox color="primary" />}
                        label="End"
                        labelPlacement="end"
                    />
                </FormGroup>
            </FormControl>
        </>
    )
}
