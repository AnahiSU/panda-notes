import { Controller, Get } from '@nestjs/common';

@Controller('notes')
export class NotesController {
    @Get()
    async getNotes(){
        return [
            {title: 'Nota 1',
            content:'Soy la nota 1',}
        ]
    }
}
