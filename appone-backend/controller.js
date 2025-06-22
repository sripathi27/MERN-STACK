const users =[
    {
        id:1,
        name:'sanduu',
    },
    {
        id:2,
        name:'tharuu',
    }
];

const getUsers= (cb) => {
    cb(users);
};

const getUserById =(id, cb)=>{
    const user = users.find(user => user.id == id);
    cb(user);
};



module.exports = {
    getUsers,
    getUserById
};
