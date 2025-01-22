///
/// Copyright © 2016-2024 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { HomeComponentsModule } from '@home/components/home-components.module';
import { DurationLeftPipe } from '@shared/pipe/duration-left.pipe';
import {
  EntityDebugSettingsButtonComponent
} from '@home/components/entity/debug/entity-debug-settings-button.component';
import { RuleNodeConfigModule } from '@home/components/rule-node/rule-node-config.module';
import {
  AddRuleNodeDialogComponent,
  AddRuleNodeLinkDialogComponent,
  CreateNestedRuleChainDialogComponent,
  RuleChainPageComponent
} from '@home/pages/rulechain/rulechain-page.component';
import { RuleNodeDetailsComponent } from '@home/pages/rulechain/rule-node-details.component';
import { RuleNodeConfigComponent } from '@home/pages/rulechain/rule-node-config.component';
import { LinkLabelsComponent } from '@home/pages/rulechain/link-labels.component';
import { RuleNodeLinkComponent } from '@home/pages/rulechain/rule-node-link.component';

@NgModule({
  declarations: [
    RuleChainPageComponent,
    RuleNodeDetailsComponent,
    LinkLabelsComponent,
    RuleNodeLinkComponent,
    RuleNodeConfigComponent,
    AddRuleNodeLinkDialogComponent,
    AddRuleNodeDialogComponent,
    CreateNestedRuleChainDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DurationLeftPipe,
    EntityDebugSettingsButtonComponent,
    RuleNodeConfigModule,
    HomeComponentsModule,
  ]
})
export class RuleChainPageModule {}