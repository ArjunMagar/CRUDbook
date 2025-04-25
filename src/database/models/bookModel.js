module.exports = (sequelize,DataTypes)=>{
    const Book = sequelize.define("book",{
        Title:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        Author:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        Publication:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        Price:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        Description:{
            type:DataTypes.STRING,
            allowNull: false,
        },


    })
    return Book
}