import { Request, Response } from 'express'
import Job from '../models/Job'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, NotFoundError } from '../errors'

export const createJob = async (req:Request,res:Response)=>{
    try {
        req.body.createdBy = req.user.userId
        const job = await Job.create({...req.body})
        res.status(StatusCodes.CREATED).json({job})
    } catch (error) {
        res.send(error)
    }
}

export const getAllJobs = async (req:Request, res:Response) =>{
    const jobs = await Job.find({createdBy:req.body}).sort('createdAt')
    res.status(StatusCodes.OK).json({jobs, count:jobs.length})
}

export const getJob = async (req:Request,res:Response)=>{
    res.send('getJob is now working')
}

export const updateJob = async (req:Request, res:Response)=>{
    res.send('updateJob is now working')
}

export const deleteJob = async (req:Request, res:Response)=>{
    res.send('deleteJob is now working')
}