import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SpbuModel = runtime.Types.Result.DefaultSelection<Prisma.$SpbuPayload>;
export type AggregateSpbu = {
    _count: SpbuCountAggregateOutputType | null;
    _avg: SpbuAvgAggregateOutputType | null;
    _sum: SpbuSumAggregateOutputType | null;
    _min: SpbuMinAggregateOutputType | null;
    _max: SpbuMaxAggregateOutputType | null;
};
export type SpbuAvgAggregateOutputType = {
    id: number | null;
    latitude: number | null;
    longitude: number | null;
};
export type SpbuSumAggregateOutputType = {
    id: number | null;
    latitude: number | null;
    longitude: number | null;
};
export type SpbuMinAggregateOutputType = {
    id: number | null;
    nama: string | null;
    alamat: string | null;
    kota: string | null;
    latitude: number | null;
    longitude: number | null;
    status: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SpbuMaxAggregateOutputType = {
    id: number | null;
    nama: string | null;
    alamat: string | null;
    kota: string | null;
    latitude: number | null;
    longitude: number | null;
    status: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SpbuCountAggregateOutputType = {
    id: number;
    nama: number;
    alamat: number;
    kota: number;
    latitude: number;
    longitude: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SpbuAvgAggregateInputType = {
    id?: true;
    latitude?: true;
    longitude?: true;
};
export type SpbuSumAggregateInputType = {
    id?: true;
    latitude?: true;
    longitude?: true;
};
export type SpbuMinAggregateInputType = {
    id?: true;
    nama?: true;
    alamat?: true;
    kota?: true;
    latitude?: true;
    longitude?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SpbuMaxAggregateInputType = {
    id?: true;
    nama?: true;
    alamat?: true;
    kota?: true;
    latitude?: true;
    longitude?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SpbuCountAggregateInputType = {
    id?: true;
    nama?: true;
    alamat?: true;
    kota?: true;
    latitude?: true;
    longitude?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SpbuAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SpbuWhereInput;
    orderBy?: Prisma.SpbuOrderByWithRelationInput | Prisma.SpbuOrderByWithRelationInput[];
    cursor?: Prisma.SpbuWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SpbuCountAggregateInputType;
    _avg?: SpbuAvgAggregateInputType;
    _sum?: SpbuSumAggregateInputType;
    _min?: SpbuMinAggregateInputType;
    _max?: SpbuMaxAggregateInputType;
};
export type GetSpbuAggregateType<T extends SpbuAggregateArgs> = {
    [P in keyof T & keyof AggregateSpbu]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSpbu[P]> : Prisma.GetScalarType<T[P], AggregateSpbu[P]>;
};
export type SpbuGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SpbuWhereInput;
    orderBy?: Prisma.SpbuOrderByWithAggregationInput | Prisma.SpbuOrderByWithAggregationInput[];
    by: Prisma.SpbuScalarFieldEnum[] | Prisma.SpbuScalarFieldEnum;
    having?: Prisma.SpbuScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SpbuCountAggregateInputType | true;
    _avg?: SpbuAvgAggregateInputType;
    _sum?: SpbuSumAggregateInputType;
    _min?: SpbuMinAggregateInputType;
    _max?: SpbuMaxAggregateInputType;
};
export type SpbuGroupByOutputType = {
    id: number;
    nama: string;
    alamat: string;
    kota: string;
    latitude: number;
    longitude: number;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: SpbuCountAggregateOutputType | null;
    _avg: SpbuAvgAggregateOutputType | null;
    _sum: SpbuSumAggregateOutputType | null;
    _min: SpbuMinAggregateOutputType | null;
    _max: SpbuMaxAggregateOutputType | null;
};
export type GetSpbuGroupByPayload<T extends SpbuGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SpbuGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SpbuGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SpbuGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SpbuGroupByOutputType[P]>;
}>>;
export type SpbuWhereInput = {
    AND?: Prisma.SpbuWhereInput | Prisma.SpbuWhereInput[];
    OR?: Prisma.SpbuWhereInput[];
    NOT?: Prisma.SpbuWhereInput | Prisma.SpbuWhereInput[];
    id?: Prisma.IntFilter<"Spbu"> | number;
    nama?: Prisma.StringFilter<"Spbu"> | string;
    alamat?: Prisma.StringFilter<"Spbu"> | string;
    kota?: Prisma.StringFilter<"Spbu"> | string;
    latitude?: Prisma.FloatFilter<"Spbu"> | number;
    longitude?: Prisma.FloatFilter<"Spbu"> | number;
    status?: Prisma.BoolFilter<"Spbu"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Spbu"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Spbu"> | Date | string;
};
export type SpbuOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nama?: Prisma.SortOrder;
    alamat?: Prisma.SortOrder;
    kota?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SpbuWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.SpbuWhereInput | Prisma.SpbuWhereInput[];
    OR?: Prisma.SpbuWhereInput[];
    NOT?: Prisma.SpbuWhereInput | Prisma.SpbuWhereInput[];
    nama?: Prisma.StringFilter<"Spbu"> | string;
    alamat?: Prisma.StringFilter<"Spbu"> | string;
    kota?: Prisma.StringFilter<"Spbu"> | string;
    latitude?: Prisma.FloatFilter<"Spbu"> | number;
    longitude?: Prisma.FloatFilter<"Spbu"> | number;
    status?: Prisma.BoolFilter<"Spbu"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Spbu"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Spbu"> | Date | string;
}, "id">;
export type SpbuOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nama?: Prisma.SortOrder;
    alamat?: Prisma.SortOrder;
    kota?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SpbuCountOrderByAggregateInput;
    _avg?: Prisma.SpbuAvgOrderByAggregateInput;
    _max?: Prisma.SpbuMaxOrderByAggregateInput;
    _min?: Prisma.SpbuMinOrderByAggregateInput;
    _sum?: Prisma.SpbuSumOrderByAggregateInput;
};
export type SpbuScalarWhereWithAggregatesInput = {
    AND?: Prisma.SpbuScalarWhereWithAggregatesInput | Prisma.SpbuScalarWhereWithAggregatesInput[];
    OR?: Prisma.SpbuScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SpbuScalarWhereWithAggregatesInput | Prisma.SpbuScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Spbu"> | number;
    nama?: Prisma.StringWithAggregatesFilter<"Spbu"> | string;
    alamat?: Prisma.StringWithAggregatesFilter<"Spbu"> | string;
    kota?: Prisma.StringWithAggregatesFilter<"Spbu"> | string;
    latitude?: Prisma.FloatWithAggregatesFilter<"Spbu"> | number;
    longitude?: Prisma.FloatWithAggregatesFilter<"Spbu"> | number;
    status?: Prisma.BoolWithAggregatesFilter<"Spbu"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Spbu"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Spbu"> | Date | string;
};
export type SpbuCreateInput = {
    nama: string;
    alamat: string;
    kota: string;
    latitude: number;
    longitude: number;
    status: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SpbuUncheckedCreateInput = {
    id?: number;
    nama: string;
    alamat: string;
    kota: string;
    latitude: number;
    longitude: number;
    status: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SpbuUpdateInput = {
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.StringFieldUpdateOperationsInput | string;
    kota?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SpbuUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.StringFieldUpdateOperationsInput | string;
    kota?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SpbuCreateManyInput = {
    id?: number;
    nama: string;
    alamat: string;
    kota: string;
    latitude: number;
    longitude: number;
    status: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SpbuUpdateManyMutationInput = {
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.StringFieldUpdateOperationsInput | string;
    kota?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SpbuUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nama?: Prisma.StringFieldUpdateOperationsInput | string;
    alamat?: Prisma.StringFieldUpdateOperationsInput | string;
    kota?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SpbuCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nama?: Prisma.SortOrder;
    alamat?: Prisma.SortOrder;
    kota?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SpbuAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type SpbuMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nama?: Prisma.SortOrder;
    alamat?: Prisma.SortOrder;
    kota?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SpbuMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nama?: Prisma.SortOrder;
    alamat?: Prisma.SortOrder;
    kota?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SpbuSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type SpbuSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nama?: boolean;
    alamat?: boolean;
    kota?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["spbu"]>;
export type SpbuSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nama?: boolean;
    alamat?: boolean;
    kota?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["spbu"]>;
export type SpbuSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nama?: boolean;
    alamat?: boolean;
    kota?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["spbu"]>;
export type SpbuSelectScalar = {
    id?: boolean;
    nama?: boolean;
    alamat?: boolean;
    kota?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SpbuOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nama" | "alamat" | "kota" | "latitude" | "longitude" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["spbu"]>;
export type $SpbuPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Spbu";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nama: string;
        alamat: string;
        kota: string;
        latitude: number;
        longitude: number;
        status: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["spbu"]>;
    composites: {};
};
export type SpbuGetPayload<S extends boolean | null | undefined | SpbuDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SpbuPayload, S>;
export type SpbuCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SpbuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SpbuCountAggregateInputType | true;
};
export interface SpbuDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Spbu'];
        meta: {
            name: 'Spbu';
        };
    };
    findUnique<T extends SpbuFindUniqueArgs>(args: Prisma.SelectSubset<T, SpbuFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SpbuClient<runtime.Types.Result.GetResult<Prisma.$SpbuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SpbuFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SpbuFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SpbuClient<runtime.Types.Result.GetResult<Prisma.$SpbuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SpbuFindFirstArgs>(args?: Prisma.SelectSubset<T, SpbuFindFirstArgs<ExtArgs>>): Prisma.Prisma__SpbuClient<runtime.Types.Result.GetResult<Prisma.$SpbuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SpbuFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SpbuFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SpbuClient<runtime.Types.Result.GetResult<Prisma.$SpbuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SpbuFindManyArgs>(args?: Prisma.SelectSubset<T, SpbuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SpbuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SpbuCreateArgs>(args: Prisma.SelectSubset<T, SpbuCreateArgs<ExtArgs>>): Prisma.Prisma__SpbuClient<runtime.Types.Result.GetResult<Prisma.$SpbuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SpbuCreateManyArgs>(args?: Prisma.SelectSubset<T, SpbuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SpbuCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SpbuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SpbuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SpbuDeleteArgs>(args: Prisma.SelectSubset<T, SpbuDeleteArgs<ExtArgs>>): Prisma.Prisma__SpbuClient<runtime.Types.Result.GetResult<Prisma.$SpbuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SpbuUpdateArgs>(args: Prisma.SelectSubset<T, SpbuUpdateArgs<ExtArgs>>): Prisma.Prisma__SpbuClient<runtime.Types.Result.GetResult<Prisma.$SpbuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SpbuDeleteManyArgs>(args?: Prisma.SelectSubset<T, SpbuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SpbuUpdateManyArgs>(args: Prisma.SelectSubset<T, SpbuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SpbuUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SpbuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SpbuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SpbuUpsertArgs>(args: Prisma.SelectSubset<T, SpbuUpsertArgs<ExtArgs>>): Prisma.Prisma__SpbuClient<runtime.Types.Result.GetResult<Prisma.$SpbuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SpbuCountArgs>(args?: Prisma.Subset<T, SpbuCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SpbuCountAggregateOutputType> : number>;
    aggregate<T extends SpbuAggregateArgs>(args: Prisma.Subset<T, SpbuAggregateArgs>): Prisma.PrismaPromise<GetSpbuAggregateType<T>>;
    groupBy<T extends SpbuGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SpbuGroupByArgs['orderBy'];
    } : {
        orderBy?: SpbuGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SpbuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpbuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SpbuFieldRefs;
}
export interface Prisma__SpbuClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SpbuFieldRefs {
    readonly id: Prisma.FieldRef<"Spbu", 'Int'>;
    readonly nama: Prisma.FieldRef<"Spbu", 'String'>;
    readonly alamat: Prisma.FieldRef<"Spbu", 'String'>;
    readonly kota: Prisma.FieldRef<"Spbu", 'String'>;
    readonly latitude: Prisma.FieldRef<"Spbu", 'Float'>;
    readonly longitude: Prisma.FieldRef<"Spbu", 'Float'>;
    readonly status: Prisma.FieldRef<"Spbu", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Spbu", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Spbu", 'DateTime'>;
}
export type SpbuFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpbuSelect<ExtArgs> | null;
    omit?: Prisma.SpbuOmit<ExtArgs> | null;
    where: Prisma.SpbuWhereUniqueInput;
};
export type SpbuFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpbuSelect<ExtArgs> | null;
    omit?: Prisma.SpbuOmit<ExtArgs> | null;
    where: Prisma.SpbuWhereUniqueInput;
};
export type SpbuFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpbuSelect<ExtArgs> | null;
    omit?: Prisma.SpbuOmit<ExtArgs> | null;
    where?: Prisma.SpbuWhereInput;
    orderBy?: Prisma.SpbuOrderByWithRelationInput | Prisma.SpbuOrderByWithRelationInput[];
    cursor?: Prisma.SpbuWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SpbuScalarFieldEnum | Prisma.SpbuScalarFieldEnum[];
};
export type SpbuFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpbuSelect<ExtArgs> | null;
    omit?: Prisma.SpbuOmit<ExtArgs> | null;
    where?: Prisma.SpbuWhereInput;
    orderBy?: Prisma.SpbuOrderByWithRelationInput | Prisma.SpbuOrderByWithRelationInput[];
    cursor?: Prisma.SpbuWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SpbuScalarFieldEnum | Prisma.SpbuScalarFieldEnum[];
};
export type SpbuFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpbuSelect<ExtArgs> | null;
    omit?: Prisma.SpbuOmit<ExtArgs> | null;
    where?: Prisma.SpbuWhereInput;
    orderBy?: Prisma.SpbuOrderByWithRelationInput | Prisma.SpbuOrderByWithRelationInput[];
    cursor?: Prisma.SpbuWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SpbuScalarFieldEnum | Prisma.SpbuScalarFieldEnum[];
};
export type SpbuCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpbuSelect<ExtArgs> | null;
    omit?: Prisma.SpbuOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SpbuCreateInput, Prisma.SpbuUncheckedCreateInput>;
};
export type SpbuCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SpbuCreateManyInput | Prisma.SpbuCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SpbuCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpbuSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SpbuOmit<ExtArgs> | null;
    data: Prisma.SpbuCreateManyInput | Prisma.SpbuCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SpbuUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpbuSelect<ExtArgs> | null;
    omit?: Prisma.SpbuOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SpbuUpdateInput, Prisma.SpbuUncheckedUpdateInput>;
    where: Prisma.SpbuWhereUniqueInput;
};
export type SpbuUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SpbuUpdateManyMutationInput, Prisma.SpbuUncheckedUpdateManyInput>;
    where?: Prisma.SpbuWhereInput;
    limit?: number;
};
export type SpbuUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpbuSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SpbuOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SpbuUpdateManyMutationInput, Prisma.SpbuUncheckedUpdateManyInput>;
    where?: Prisma.SpbuWhereInput;
    limit?: number;
};
export type SpbuUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpbuSelect<ExtArgs> | null;
    omit?: Prisma.SpbuOmit<ExtArgs> | null;
    where: Prisma.SpbuWhereUniqueInput;
    create: Prisma.XOR<Prisma.SpbuCreateInput, Prisma.SpbuUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SpbuUpdateInput, Prisma.SpbuUncheckedUpdateInput>;
};
export type SpbuDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpbuSelect<ExtArgs> | null;
    omit?: Prisma.SpbuOmit<ExtArgs> | null;
    where: Prisma.SpbuWhereUniqueInput;
};
export type SpbuDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SpbuWhereInput;
    limit?: number;
};
export type SpbuDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpbuSelect<ExtArgs> | null;
    omit?: Prisma.SpbuOmit<ExtArgs> | null;
};
