import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from './Typography';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: '#FFF0F5',
    },
    container: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(30),
        display: 'flex',
        position: 'relative',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
    },
    image: {
        height: 55,
    },
    title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    curvyLines: {
        pointerEvents: 'none',
        position: 'absolute',
        top: -180,
    },
});

function ProductValues(props) {
    const {classes} = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <img
                    src={require("../stockImages/curvyLines.png")}
                    className={classes.curvyLines}
                    alt="curvy lines"
                />
                <Grid container spacing={5} align={"center"}>
                    <Grid item xs={12} md={4}>
                        <div className={classes.item}>
                            <img
                                className={classes.image}
                                src="https://www.flaticon.com/premium-icon/icons/svg/1147/1147736.svg"
                                // src={require("../stockImages/appointment.svg")}
                                alt="Appointment"
                            />
                            <Typography variant="h6" className={classes.title}>
                                Book Appointments
                            </Typography>
                            <Typography variant="h5">
                                {'Check out the hospitals in your area and book appointment for any kind of ailment.'}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className={classes.item} align={"center"}>
                            <img
                                style={{backgroundColor: '#FFF0F5'}}
                                className={classes.image}
                                // src="https://image.flaticon.com/icons/png/512/35/35920.png"
                                src={require("../stockImages/documents.png")}
                                alt="Document"
                            />
                            <Typography variant="h6" className={classes.title}>
                                Documents
                            </Typography>
                            <Typography variant="h5">
                                {'Check your documents anytime anywhere...'}

                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className={classes.item} align={"center"}>
                            <img
                                className={classes.image}
                                // src="https://image.flaticon.com/icons/png/512/1792/1792189.png"
                                src={require("../stockImages/accessControl.png")}
                                alt="Access Control"
                            />
                            <Typography variant="h6" className={classes.title}>
                                Restricted Access
                            </Typography>
                            <Typography variant="h5">
                                {'Limit the access to your sensitive data based on blockchain trust.'}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

ProductValues.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);