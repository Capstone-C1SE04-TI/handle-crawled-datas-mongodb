const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const { dbCrawlConnection } = require("../../configs/connect-database");

const TokenSchema = new mongoose.Schema({
    _id: { type: ObjectId },
    id: {
        type: Number,
        required: true,
        unique: true
    },
    ethId: {
        type: Number,
        unique: true
    },
    cmcRank: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    symbol: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    contractAddress: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    type: {
        type: String,
        trim: true,
        required: true
    },
    iconURL: {
        type: String,
        trim: true,
        default: ""
    },
    marketCap: {
        type: Number
    },
    maxSupply: {
        type: Number
    },
    totalSupply: {
        type: Number
    },
    circulatingSupply: {
        type: Number
    },
    tagNames: {
        type: Array,
        default: []
    },
    urls: {
        type: Object,
        required: true,
        default: {}
    },
    usd: {
        type: Object,
        required: true,
        default: {}
    },
    prices: {
        type: Object,
        required: true,
        default: {}
    },
    originalPrices: {
        type: Object,
        required: true,
        default: {}
    },
    pricesLast1Day: {
        type: Array,
        default: {}
    }
});

const TokenModel = dbCrawlConnection.model("Token", TokenSchema);

module.exports = TokenModel;
