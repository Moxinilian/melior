(function() {var implementors = {
"crossbeam_channel":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"crossbeam_channel/struct.Iter.html\" title=\"struct crossbeam_channel::Iter\">Iter</a>&lt;'_, T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"crossbeam_channel/struct.IntoIter.html\" title=\"struct crossbeam_channel::IntoIter\">IntoIter</a>&lt;T&gt;"]],
"either":[["impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a>,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a>&lt;Item = L::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>&gt;,</span>"]],
"itertools":[["impl&lt;I, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.PadUsing.html\" title=\"struct itertools::structs::PadUsing\">PadUsing</a>&lt;I, F&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.usize.html\">usize</a>) -&gt; I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>,</span>"],["impl&lt;I, F, T, U, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.FilterMapOk.html\" title=\"struct itertools::structs::FilterMapOk\">FilterMapOk</a>&lt;I, F&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.69.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, E&gt;&gt;,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(T) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.69.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;U&gt;,</span>"],["impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.ZipLongest.html\" title=\"struct itertools::structs::ZipLongest\">ZipLongest</a>&lt;T, U&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>,\n    U: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>,</span>"],["impl&lt;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.WithPosition.html\" title=\"struct itertools::structs::WithPosition\">WithPosition</a>&lt;I&gt;"],["impl&lt;I, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.Positions.html\" title=\"struct itertools::structs::Positions\">Positions</a>&lt;I, F&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.bool.html\">bool</a>,</span>"],["impl&lt;I, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.TupleWindows.html\" title=\"struct itertools::structs::TupleWindows\">TupleWindows</a>&lt;I, T&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a>&lt;Item = T::Item&gt;,\n    T: <a class=\"trait\" href=\"itertools/traits/trait.HomogeneousTuple.html\" title=\"trait itertools::traits::HomogeneousTuple\">HomogeneousTuple</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    T::Item: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;I, ElemF&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.IntersperseWith.html\" title=\"struct itertools::structs::IntersperseWith\">IntersperseWith</a>&lt;I, ElemF&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>,\n    ElemF: IntersperseElement&lt;I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>&gt;,</span>"],["impl&lt;I, F, T, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.FilterOk.html\" title=\"struct itertools::structs::FilterOk\">FilterOk</a>&lt;I, F&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.69.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, E&gt;&gt;,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.reference.html\">&amp;T</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.bool.html\">bool</a>,</span>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.Unique.html\" title=\"struct itertools::structs::Unique\">Unique</a>&lt;I&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a>,\n    I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;I, J, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.MergeBy.html\" title=\"struct itertools::structs::MergeBy\">MergeBy</a>&lt;I, J, F&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a>,\n    J: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a>&lt;Item = I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>&gt;,\n    F: MergePredicate&lt;I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>&gt;,</span>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.CombinationsWithReplacement.html\" title=\"struct itertools::structs::CombinationsWithReplacement\">CombinationsWithReplacement</a>&lt;I&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>,\n    I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;A, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.RcIter.html\" title=\"struct itertools::structs::RcIter\">RcIter</a>&lt;I&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a>&lt;Item = A&gt;,</span>"],["impl&lt;I, V, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.UniqueBy.html\" title=\"struct itertools::structs::UniqueBy\">UniqueBy</a>&lt;I, V, F&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a>,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>) -&gt; V,</span>"],["impl&lt;I, J&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.InterleaveShortest.html\" title=\"struct itertools::structs::InterleaveShortest\">InterleaveShortest</a>&lt;I, J&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a>,\n    J: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a>&lt;Item = I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>&gt;,</span>"],["impl&lt;I, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.Update.html\" title=\"struct itertools::structs::Update\">Update</a>&lt;I, F&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;mut I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>),</span>"],["impl&lt;I, T, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.FlattenOk.html\" title=\"struct itertools::structs::FlattenOk\">FlattenOk</a>&lt;I, T, E&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.69.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, E&gt;&gt;,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>,</span>"],["impl&lt;I, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.TupleCombinations.html\" title=\"struct itertools::structs::TupleCombinations\">TupleCombinations</a>&lt;I, T&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a>,\n    T: HasCombination&lt;I&gt;,</span>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.Powerset.html\" title=\"struct itertools::structs::Powerset\">Powerset</a>&lt;I&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>,\n    I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;I, J&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.Interleave.html\" title=\"struct itertools::structs::Interleave\">Interleave</a>&lt;I, J&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>,\n    J: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>&gt;,</span>"],["impl&lt;I, J&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.Product.html\" title=\"struct itertools::structs::Product\">Product</a>&lt;I, J&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a>,\n    J: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a>,\n    I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;I, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.KMergeBy.html\" title=\"struct itertools::structs::KMergeBy\">KMergeBy</a>&lt;I, F&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>,\n    F: KMergePredicate&lt;I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>&gt;,</span>"],["impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.RepeatN.html\" title=\"struct itertools::structs::RepeatN\">RepeatN</a>&lt;A&gt;<span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.Combinations.html\" title=\"struct itertools::structs::Combinations\">Combinations</a>&lt;I&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>,\n    I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"]],
"regex":[["impl&lt;'r, 't&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"regex/struct.SplitN.html\" title=\"struct regex::SplitN\">SplitN</a>&lt;'r, 't&gt;"],["impl&lt;'r, 't&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"regex/struct.CaptureMatches.html\" title=\"struct regex::CaptureMatches\">CaptureMatches</a>&lt;'r, 't&gt;"],["impl&lt;'r, 't&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"regex/bytes/struct.Matches.html\" title=\"struct regex::bytes::Matches\">Matches</a>&lt;'r, 't&gt;"],["impl&lt;'r, 't&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"regex/struct.Split.html\" title=\"struct regex::Split\">Split</a>&lt;'r, 't&gt;"],["impl&lt;'r&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"regex/bytes/struct.CaptureNames.html\" title=\"struct regex::bytes::CaptureNames\">CaptureNames</a>&lt;'r&gt;"],["impl&lt;'c, 't&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"regex/struct.SubCaptureMatches.html\" title=\"struct regex::SubCaptureMatches\">SubCaptureMatches</a>&lt;'c, 't&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"regex/bytes/struct.SetMatchesIter.html\" title=\"struct regex::bytes::SetMatchesIter\">SetMatchesIter</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"regex/struct.SetMatchesIter.html\" title=\"struct regex::SetMatchesIter\">SetMatchesIter</a>&lt;'a&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"regex/bytes/struct.SetMatchesIntoIter.html\" title=\"struct regex::bytes::SetMatchesIntoIter\">SetMatchesIntoIter</a>"],["impl&lt;'r&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"regex/struct.CaptureNames.html\" title=\"struct regex::CaptureNames\">CaptureNames</a>&lt;'r&gt;"],["impl&lt;'r, 't&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"regex/struct.Matches.html\" title=\"struct regex::Matches\">Matches</a>&lt;'r, 't&gt;"],["impl&lt;'r, 't&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"regex/bytes/struct.Split.html\" title=\"struct regex::bytes::Split\">Split</a>&lt;'r, 't&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"regex/struct.SetMatchesIntoIter.html\" title=\"struct regex::SetMatchesIntoIter\">SetMatchesIntoIter</a>"],["impl&lt;'c, 't&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"regex/bytes/struct.SubCaptureMatches.html\" title=\"struct regex::bytes::SubCaptureMatches\">SubCaptureMatches</a>&lt;'c, 't&gt;"],["impl&lt;'r, 't&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"regex/bytes/struct.SplitN.html\" title=\"struct regex::bytes::SplitN\">SplitN</a>&lt;'r, 't&gt;"],["impl&lt;'r, 't&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"regex/bytes/struct.CaptureMatches.html\" title=\"struct regex::bytes::CaptureMatches\">CaptureMatches</a>&lt;'r, 't&gt;"]],
"regex_syntax":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"regex_syntax/utf8/struct.Utf8Sequences.html\" title=\"struct regex_syntax::utf8::Utf8Sequences\">Utf8Sequences</a>"]],
"serde_json":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.Values.html\" title=\"struct serde_json::map::Values\">Values</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.Iter.html\" title=\"struct serde_json::map::Iter\">Iter</a>&lt;'a&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.IntoIter.html\" title=\"struct serde_json::map::IntoIter\">IntoIter</a>"],["impl&lt;'de, R, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"serde_json/struct.StreamDeserializer.html\" title=\"struct serde_json::StreamDeserializer\">StreamDeserializer</a>&lt;'de, R, T&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"serde_json/de/trait.Read.html\" title=\"trait serde_json::de::Read\">Read</a>&lt;'de&gt; + Fused,\n    T: <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</span>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.Keys.html\" title=\"struct serde_json::map::Keys\">Keys</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.ValuesMut.html\" title=\"struct serde_json::map::ValuesMut\">ValuesMut</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.IterMut.html\" title=\"struct serde_json::map::IterMut\">IterMut</a>&lt;'a&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()