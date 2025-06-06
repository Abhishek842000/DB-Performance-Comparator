"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPpConnectivity = exports.getPpLocation = void 0;
const db_1 = require("../aws/db");
const getPpLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { serial } = req.params;
        const result = yield db_1.pool.query('SELECT * FROM nflexon_app.pp_location WHERE pp_serial_no = $1', [serial]);
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to get PP location' });
    }
});
exports.getPpLocation = getPpLocation;
const getPpConnectivity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { serial } = req.params;
        const result = yield db_1.pool.query('SELECT * FROM nflexon_app.pp_connectivity WHERE pp_serial_no = $1', [serial]);
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to get PP connectivity' });
    }
});
exports.getPpConnectivity = getPpConnectivity;
