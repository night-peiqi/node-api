import { Module } from '@nestjs/common'

import { KnowledgeBaseController } from './knowledge-base.controller'
import { KnowledgeBaseService } from './knowledge-base.service'

@Module({
  imports: [],
  controllers: [KnowledgeBaseController],
  providers: [KnowledgeBaseService]
})
export class KnowledgeBaseModule {}
