'use strict';
const path = require('path');
const logger = require('../../utils/logger').logger;

module.exports = class MongoDao {
    constructor(model) {
        this.model = model;
    }

    async find(criteria, projection, options={lean:true}) {
        try {
            return await this.model.find(criteria, projection, options);
        } catch (error) {
            logger.error({
                error: error.message,
                methodName: 'find',
                fileName: path.basename(__filename)
            });
            throw new Error(error)
        }
    }

    async findOne(criteria, projection, options={lean:true}) {
        try {
            return await this.model.findOne(criteria, projection, options);
        } catch (error) {
            logger.error({
                error: error.message,
                methodName: 'findOne',
                fileName: path.basename(__filename)
            });
            throw new Error(error)
        }
    }
    async aggregation(criteria, projection, options={lean:true}) {
        try {
            return await this.model.aggregate(criteria);
        } catch (error) {
            logger.error({
                error: error.message,
                methodName: 'findOne',
                fileName: path.basename(__filename)
            });
            throw new Error(error)
        }
    }

    async update(criteria, dataToSet, options={lean:true}) {
        try {
            return await this.model.updateOne(criteria, dataToSet, options);
        } catch (error) {
            logger.error({
                error: error.message,
                methodName: 'update',
                fileName: path.basename(__filename)
            });
            throw new Error(error)
        }
    }

    async insert(objToSave) {
        try {
            return await this.model.create(objToSave);
        } catch (error) {
            logger.error({
                error: error.message,
                methodName: 'insert',
                fileName: path.basename(__filename)
            });
            throw new Error(error)
        }
    }

    async findOneAndRemove(query) {
        try {
            let result = await this.model.findOneAndRemove(query);
            return result
        } catch (error) {
            logger.error({
                error: error,
                methodName: 'findOneAndRemove',
                fileName: path.basename(__filename)
            });
            throw new Error(error);
        }
    }
    async count() {
        try {
            let result = await this.model.count()
            return result
        } catch (error) {
            logger.error({
                error: error,
                methodName: 'count',
                fileName: path.basename(__filename)
            });
            throw new Error(error);
        }
    }
    async removeAll(query) {
        try {
            let result = await this.model.remove(query);
            return result
        } catch (error) {
            logger.error({
                error: error,
                methodName: 'removeAll',
                fileName: path.basename(__filename)
            });
            throw new Error(error);
        }
    }

}