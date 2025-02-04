// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId } from '@polkadot/types/interfaces';
import { DerivedStaking, DerivedStakingElected } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { memo } from '../util';

export function electedInfo (api: ApiInterfaceRx): () => Observable<DerivedStakingElected> {
  return memo((): Observable<DerivedStakingElected> =>
    api.derive.staking.validators().pipe(
      switchMap(({ currentElected }): Observable<[AccountId[], DerivedStaking[]]> =>
        combineLatest([
          of(currentElected),
          combineLatest(currentElected.map((accountId): Observable<DerivedStaking> =>
            api.derive.staking.info(accountId)
          ))
        ])
      ),
      map(([currentElected, info]): DerivedStakingElected => ({
        currentElected, info
      }))
    )
  );
}
