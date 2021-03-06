import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import ticketRoutes from './routes/ticket.routes';
import ticketRepliesRoutes from './routes/ticketReplies.routes';
import dpaRutes from './routes/dpa.routes';

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
    
//hello world
app.get('/', (req:any, res:any) => {
    return res.status(200).json({
        message:'API REST - Proyecto final ICI4240-1', 
        name:'Sistema de servicio al cliente',
        author:'Giancarlo Ferretto'}
    );
});

//routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/tickets', ticketRoutes);
app.use('/ticketsreply', ticketRepliesRoutes);
app.use('/regiones', dpaRutes);

export default app;