import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Title from '../../genericFiles/Title';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";
import {ADDRESS} from "../../genericFiles/constants";
import SpinnerDialog from "../../genericFiles/SpinnerDialog";

const theme = createMuiTheme();
const avatar = {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
};
const paper = {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};
const form = {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
};
const submit = {
    margin: theme.spacing(3, 0, 2),
};

export default function ResearcherPersonalInfo(props) {
    const [updatedData, setUpdatedData] = React.useState(JSON.parse(props.data));
    const [loaded, setLoaded] = React.useState(false);
    var researcher = updatedData;
    researcher.password = '';
    researcher.id = researcher.registrationId;
    console.log(updatedData);
    const manageUpdateForm = () => {
        var x = document.getElementById("form");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    };
    const handleChange = (event) => {
        researcher[event.target.name] = event.target.value;
        console.log(researcher[event.target.name]);
    };

    const submitForm = async (event) => {
        event.preventDefault();
        setLoaded(true);
        let response = "";
        try {
            console.log(researcher);
            response = await axios.post(ADDRESS + `updateAsset`, researcher);
            response = response.data;
            console.log(response);
            if (response === "Correct") {
                console.log(response);
                manageUpdateForm();
                delete researcher.password;
                setUpdatedData(researcher);
            } else {
                //show error message
                console.log(response);
            }
        } catch (e) {
            //show error message
            console.log("failed to connect to the server");
        }
        setLoaded(false);
    };

    return (
        <React.Fragment>
            <Title>{updatedData.name}</Title>
            <Typography component="p" variant="h6" align='center'>
                UserName : {updatedData.userName}
                <br/>
                Phone : {updatedData.phone}
                <br/>
                Address : {updatedData.address}
                <br/>
                RegistrationId : {updatedData.registrationId}
            </Typography>
            <div align='center'>
                <Link color="primary" onClick={manageUpdateForm}>
                    Update Researcher Info
                </Link>
            </div>
            <div id="form" style={{display: 'none'}}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <div style={paper}>
                        <Avatar style={avatar}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Update Info
                        </Typography>
                        <form style={form} onSubmit={submitForm}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="name"
                                        name="name"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        defaultValue={researcher.name}
                                        autoFocus={true}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="phone"
                                        label="Phone No."
                                        name="phone"
                                        autoComplete="phone"
                                        defaultValue={researcher.phone}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="address"
                                        label="Address"
                                        name="address"
                                        autoComplete="India"
                                        defaultValue={researcher.address}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    style={submit}
                                >
                                    Update
                                </Button>
                            </Grid>
                        </form>
                    </div>
                </Container>
            </div>
            <SpinnerDialog open={loaded}/>
        </React.Fragment>
    );
}
