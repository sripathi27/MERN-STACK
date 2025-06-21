import { colors, Grid, Typography } from "@mui/material";

const UserForm = props => {
    return (
        <Grid
            container
            spacing={2}
            sx={
                {
                    backgroundColor: '#ffffff',
                    marginBottom: '30px',
                    display: 'block'
                }
            }
        >
            <Grid item sx={12}>
                <Typography component={'h1'} sx={{color: '#000000'}}>User Form</Typography>   
            </Grid>

            <Grid item xs={12} sm={{display:'flex'}}>
                <Typography
                    component={'label'}
                    htmlFor="id"
                    sx={
                        {
                            color:'#000000',
                            marginRight:'20px',
                            fontSize:'20px',
                            width:'100px',
                            display:'block',
                        }
                    }  
                >
                     ID
                </Typography>
                <input
                    type="number"
                    id="id"
                    name="id"
                    sx={{width:'400px'}}
                    value={''}
                    onChange={e=>{}}
                    />
            </Grid>
             <Grid item xs={12} sm={{display:'flex'}}>
                <Typography
                    component={'label'}
                    htmlFor="id"
                    sx={
                        {
                            color:'#000000',
                            marginRight:'20px',
                            fontSize:'20px',
                            width:'100px',
                            display:'block',
                        }
                    }  
                >
                     Name
                </Typography>
                <input
                    type="text"
                    id="name"
                    name="name"
                    sx={{width:'400px'}}
                    value={''}
                    onChange={e=>{}}
                    />
            </Grid>
            <button
                sx={
                {
                    margin:'auto',
                    marginBottom:'20px',
                    marginTop:'20px',
                    marginLeft:'15px',
                    backgroundColor:'#00c6e6',
                    color:'#000000',
                    '&:hover':{
                        opacity:'0.7',
                        backgroundColor:'#00c6e6',
                    }
                }
            }
            >
                Add
            </button>   
        </Grid>
    );
}
export default UserForm;