var srcIndex = new Map(JSON.parse('[\
["adler",["",[],["algo.rs","lib.rs"]]],\
["aho_corasick",["",[["nfa",[],["contiguous.rs","mod.rs","noncontiguous.rs"]],["packed",[["teddy",[],["builder.rs","generic.rs","mod.rs"]]],["api.rs","ext.rs","mod.rs","pattern.rs","rabinkarp.rs","vector.rs"]],["util",[],["alphabet.rs","buffer.rs","byte_frequencies.rs","debug.rs","error.rs","int.rs","mod.rs","prefilter.rs","primitives.rs","remapper.rs","search.rs","special.rs"]]],["ahocorasick.rs","automaton.rs","dfa.rs","lib.rs","macros.rs"]]],\
["anstream",["",[["adapter",[],["mod.rs","strip.rs","wincon.rs"]]],["auto.rs","buffer.rs","fmt.rs","lib.rs","macros.rs","stream.rs","strip.rs"]]],\
["anstyle",["",[],["color.rs","effect.rs","lib.rs","macros.rs","reset.rs","style.rs"]]],\
["anstyle_parse",["",[["state",[],["definitions.rs","mod.rs","table.rs"]]],["lib.rs","params.rs"]]],\
["anstyle_query",["",[],["lib.rs","windows.rs"]]],\
["bincode",["",[["config",[],["endian.rs","int.rs","legacy.rs","limit.rs","mod.rs","trailing.rs"]],["de",[],["mod.rs","read.rs"]],["ser",[],["mod.rs"]]],["byteorder.rs","error.rs","internal.rs","lib.rs"]]],\
["cfg_if",["",[],["lib.rs"]]],\
["clap",["",[],["lib.rs"]]],\
["clap_builder",["",[["builder",[],["action.rs","app_settings.rs","arg.rs","arg_group.rs","arg_predicate.rs","arg_settings.rs","command.rs","debug_asserts.rs","ext.rs","mod.rs","os_str.rs","possible_value.rs","range.rs","resettable.rs","str.rs","styled_str.rs","styling.rs","value_hint.rs","value_parser.rs"]],["error",[],["context.rs","format.rs","kind.rs","mod.rs"]],["output",[["textwrap",[],["core.rs","mod.rs","word_separators.rs","wrap_algorithms.rs"]]],["fmt.rs","help.rs","help_template.rs","mod.rs","usage.rs"]],["parser",[["features",[],["mod.rs","suggestions.rs"]],["matches",[],["arg_matches.rs","matched_arg.rs","mod.rs","value_source.rs"]]],["arg_matcher.rs","error.rs","mod.rs","parser.rs","validator.rs"]],["util",[],["any_value.rs","color.rs","flat_map.rs","flat_set.rs","graph.rs","id.rs","mod.rs","str_to_bool.rs"]]],["derive.rs","lib.rs","macros.rs","mkeymap.rs"]]],\
["clap_derive",["",[["derives",[],["args.rs","into_app.rs","mod.rs","parser.rs","subcommand.rs","value_enum.rs"]],["utils",[],["doc_comments.rs","error.rs","mod.rs","spanned.rs","ty.rs"]]],["attr.rs","dummies.rs","item.rs","lib.rs","macros.rs"]]],\
["clap_lex",["",[],["ext.rs","lib.rs"]]],\
["colorchoice",["",[],["lib.rs"]]],\
["comrak",["",[["parser",[],["autolink.rs","inlines.rs","mod.rs","multiline_block_quote.rs","table.rs"]],["plugins",[],["mod.rs","syntect.rs"]]],["adapters.rs","arena_tree.rs","cm.rs","ctype.rs","entity.rs","html.rs","lib.rs","nodes.rs","scanners.rs","strings.rs","xml.rs"]]],\
["convert_case",["",[],["case.rs","converter.rs","lib.rs","pattern.rs","segmentation.rs"]]],\
["crc32fast",["",[["specialized",[],["mod.rs","pclmulqdq.rs"]]],["baseline.rs","combine.rs","lib.rs","table.rs"]]],\
["darling",["",[],["lib.rs","macros_public.rs"]]],\
["darling_core",["",[["ast",[],["data.rs","generics.rs","mod.rs"]],["codegen",[],["attr_extractor.rs","default_expr.rs","error.rs","field.rs","from_attributes_impl.rs","from_derive_impl.rs","from_field.rs","from_meta_impl.rs","from_type_param.rs","from_variant_impl.rs","mod.rs","outer_from_impl.rs","postfix_transform.rs","trait_impl.rs","variant.rs","variant_data.rs"]],["error",[],["kind.rs","mod.rs"]],["options",[],["core.rs","forward_attrs.rs","from_attributes.rs","from_derive.rs","from_field.rs","from_meta.rs","from_type_param.rs","from_variant.rs","input_field.rs","input_variant.rs","mod.rs","outer_from.rs","shape.rs"]],["usage",[],["generics_ext.rs","ident_set.rs","lifetimes.rs","mod.rs","options.rs","type_params.rs"]],["util",[],["flag.rs","ident_string.rs","ignored.rs","mod.rs","over_ride.rs","parse_attribute.rs","path_list.rs","path_to_string.rs","shape.rs","spanned_value.rs","with_original.rs"]]],["derive.rs","from_attributes.rs","from_derive_input.rs","from_field.rs","from_generic_param.rs","from_generics.rs","from_meta.rs","from_type_param.rs","from_variant.rs","lib.rs","macros_private.rs","macros_public.rs"]]],\
["darling_macro",["",[],["lib.rs"]]],\
["dashmap",["",[["mapref",[],["entry.rs","mod.rs","multiple.rs","one.rs"]],["setref",[],["mod.rs","multiple.rs","one.rs"]]],["iter.rs","iter_set.rs","lib.rs","lock.rs","read_only.rs","set.rs","t.rs","try_result.rs","util.rs"]]],\
["derive_builder",["",[],["error.rs","lib.rs"]]],\
["derive_builder_core",["",[["macro_options",[],["darling_opts.rs","mod.rs"]]],["block.rs","build_method.rs","builder.rs","builder_field.rs","change_span.rs","default_expression.rs","deprecation_notes.rs","doc_comment.rs","initializer.rs","lib.rs","options.rs","setter.rs"]]],\
["derive_builder_macro",["",[],["lib.rs"]]],\
["deunicode",["",[],["lib.rs","old.rs"]]],\
["entities",["",[],["entities.rs","lib.rs"]]],\
["flate2",["",[["deflate",[],["bufread.rs","mod.rs","read.rs","write.rs"]],["ffi",[],["mod.rs","rust.rs"]],["gz",[],["bufread.rs","mod.rs","read.rs","write.rs"]],["zlib",[],["bufread.rs","mod.rs","read.rs","write.rs"]]],["bufreader.rs","crc.rs","lib.rs","mem.rs","zio.rs"]]],\
["fnv",["",[],["lib.rs"]]],\
["hashbrown",["",[["external_trait_impls",[],["mod.rs"]],["raw",[],["alloc.rs","bitmask.rs","mod.rs","sse2.rs"]]],["lib.rs","macros.rs","map.rs","scopeguard.rs","set.rs"]]],\
["heck",["",[],["kebab.rs","lib.rs","lower_camel.rs","shouty_kebab.rs","shouty_snake.rs","snake.rs","title.rs","train.rs","upper_camel.rs"]]],\
["ident_case",["",[],["lib.rs"]]],\
["itoa",["",[],["lib.rs","udiv128.rs"]]],\
["libc",["",[["unix",[["linux_like",[["linux",[["arch",[["generic",[],["mod.rs"]]],["mod.rs"]],["gnu",[["b64",[["x86_64",[],["align.rs","mod.rs","not_x32.rs"]]],["mod.rs"]]],["align.rs","mod.rs"]]],["align.rs","mod.rs","non_exhaustive.rs"]]],["mod.rs"]]],["align.rs","mod.rs"]]],["fixed_width_ints.rs","lib.rs","macros.rs"]]],\
["linux_raw_sys",["",[["x86_64",[],["errno.rs","general.rs","ioctl.rs"]]],["elf.rs","lib.rs"]]],\
["lock_api",["",[],["lib.rs","mutex.rs","remutex.rs","rwlock.rs"]]],\
["melior",["",[["diagnostic",[],["handler_id.rs","severity.rs"]],["dialect",[["llvm",[],["alloca_options.rs","attributes.rs","load_store_options.rs","type.rs"]]],["arith.rs","cf.rs","func.rs","handle.rs","index.rs","llvm.rs","memref.rs","ods.rs","registry.rs","scf.rs"]],["ir",[["attribute",[],["array.rs","attribute_like.rs","dense_elements.rs","dense_i32_array.rs","dense_i64_array.rs","flat_symbol_ref.rs","float.rs","integer.rs","macro.rs","string.rs","type.rs"]],["block",[],["argument.rs"]],["operation",[],["builder.rs","printing_flags.rs","result.rs"]],["type",[["id",[],["allocator.rs"]]],["function.rs","id.rs","integer.rs","macro.rs","mem_ref.rs","ranked_tensor.rs","shaped_type_like.rs","tuple.rs","type_like.rs"]],["value",[],["value_like.rs"]]],["affine_map.rs","attribute.rs","block.rs","identifier.rs","location.rs","module.rs","operation.rs","region.rs","type.rs","value.rs"]],["pass",[],["async.rs","conversion.rs","external.rs","gpu.rs","linalg.rs","manager.rs","operation_manager.rs","sparse_tensor.rs","transform.rs"]]],["context.rs","diagnostic.rs","dialect.rs","error.rs","execution_engine.rs","ir.rs","lib.rs","logical_result.rs","macro.rs","pass.rs","string_ref.rs","utility.rs"]]],\
["melior_macro",["",[["dialect",[["error",[],["ods.rs"]],["generation",[],["attribute_accessor.rs","element_accessor.rs","operand_accessor.rs","operation_builder.rs","region_accessor.rs","result_accessor.rs","successor_accessor.rs"]],["input",[],["input_field.rs"]],["operation",[["builder",[],["type_state_item.rs","type_state_list.rs"]]],["attribute.rs","builder.rs","operand.rs","operation_element.rs","operation_field.rs","region.rs","result.rs","successor.rs","variadic_kind.rs"]]],["error.rs","generation.rs","input.rs","operation.rs","trait.rs","type.rs","utility.rs"]],["parse",[],["dialect_operation_set.rs","identifier_list.rs","pass_set.rs"]]],["attribute.rs","dialect.rs","lib.rs","operation.rs","parse.rs","pass.rs","type.rs","utility.rs"]]],\
["memchr",["",[["arch",[["all",[["packedpair",[],["default_rank.rs","mod.rs"]]],["memchr.rs","mod.rs","rabinkarp.rs","shiftor.rs","twoway.rs"]],["generic",[],["memchr.rs","mod.rs","packedpair.rs"]],["x86_64",[["avx2",[],["memchr.rs","mod.rs","packedpair.rs"]],["sse2",[],["memchr.rs","mod.rs","packedpair.rs"]]],["memchr.rs","mod.rs"]]],["mod.rs"]],["memmem",[],["mod.rs","searcher.rs"]]],["cow.rs","ext.rs","lib.rs","macros.rs","memchr.rs","vector.rs"]]],\
["miniz_oxide",["",[["deflate",[],["buffer.rs","core.rs","mod.rs","stream.rs"]],["inflate",[],["core.rs","mod.rs","output_buffer.rs","stream.rs"]]],["lib.rs","shared.rs"]]],\
["mlir_sys",["",[],["lib.rs"]]],\
["once_cell",["",[],["imp_std.rs","lib.rs","race.rs"]]],\
["onig",["",[],["buffers.rs","find.rs","flags.rs","lib.rs","match_param.rs","names.rs","region.rs","replace.rs","syntax.rs","tree.rs","utils.rs"]]],\
["onig_sys",["",[],["ffi.rs","lib.rs"]]],\
["parking_lot_core",["",[["thread_parker",[],["linux.rs","mod.rs"]]],["lib.rs","parking_lot.rs","spinwait.rs","util.rs","word_lock.rs"]]],\
["paste",["",[],["attr.rs","error.rs","lib.rs","segment.rs"]]],\
["proc_macro2",["",[],["detection.rs","extra.rs","fallback.rs","lib.rs","marker.rs","parse.rs","rcvec.rs","wrapper.rs"]]],\
["quote",["",[],["ext.rs","format.rs","ident_fragment.rs","lib.rs","runtime.rs","spanned.rs","to_tokens.rs"]]],\
["regex",["",[["regex",[],["bytes.rs","mod.rs","string.rs"]],["regexset",[],["bytes.rs","mod.rs","string.rs"]]],["builders.rs","bytes.rs","error.rs","find_byte.rs","lib.rs"]]],\
["regex_automata",["",[["dfa",[],["mod.rs","onepass.rs","remapper.rs"]],["hybrid",[],["dfa.rs","error.rs","id.rs","mod.rs","regex.rs","search.rs"]],["meta",[],["error.rs","limited.rs","literal.rs","mod.rs","regex.rs","reverse_inner.rs","stopat.rs","strategy.rs","wrappers.rs"]],["nfa",[["thompson",[],["backtrack.rs","builder.rs","compiler.rs","error.rs","literal_trie.rs","map.rs","mod.rs","nfa.rs","pikevm.rs","range_trie.rs"]]],["mod.rs"]],["util",[["determinize",[],["mod.rs","state.rs"]],["prefilter",[],["aho_corasick.rs","byteset.rs","memchr.rs","memmem.rs","mod.rs","teddy.rs"]],["unicode_data",[],["mod.rs"]]],["alphabet.rs","captures.rs","empty.rs","escape.rs","int.rs","interpolate.rs","iter.rs","lazy.rs","look.rs","memchr.rs","mod.rs","pool.rs","primitives.rs","search.rs","sparse_set.rs","start.rs","syntax.rs","utf8.rs","wire.rs"]]],["lib.rs","macros.rs"]]],\
["rustix",["",[["backend",[["linux_raw",[["arch",[],["mod.rs","x86_64.rs"]],["fs",[],["dir.rs","inotify.rs","makedev.rs","mod.rs","syscalls.rs","types.rs"]],["io",[],["errno.rs","mod.rs","syscalls.rs","types.rs"]],["mount",[],["mod.rs","syscalls.rs","types.rs"]],["termios",[],["mod.rs","syscalls.rs"]],["ugid",[],["mod.rs","syscalls.rs"]]],["c.rs","conv.rs","mod.rs","reg.rs"]]]],["fs",[],["abs.rs","at.rs","constants.rs","copy_file_range.rs","cwd.rs","dir.rs","fadvise.rs","fcntl.rs","fd.rs","file_type.rs","id.rs","ioctl.rs","makedev.rs","memfd_create.rs","mod.rs","mount.rs","openat2.rs","raw_dir.rs","seek_from.rs","sendfile.rs","statx.rs","sync.rs","xattr.rs"]],["io",[],["close.rs","dup.rs","errno.rs","fcntl.rs","ioctl.rs","mod.rs","read_write.rs"]],["ioctl",[],["linux.rs","mod.rs","patterns.rs"]],["maybe_polyfill",[["std",[],["mod.rs"]]]],["mount",[],["mod.rs","mount_unmount.rs","types.rs"]],["path",[],["arg.rs","mod.rs"]],["termios",[],["ioctl.rs","mod.rs","tc.rs","tty.rs","types.rs"]]],["bitcast.rs","cstr.rs","ffi.rs","lib.rs","pid.rs","timespec.rs","ugid.rs","utils.rs","weak.rs"]]],\
["ryu",["",[["buffer",[],["mod.rs"]],["pretty",[],["exponent.rs","mantissa.rs","mod.rs"]]],["common.rs","d2s.rs","d2s_full_table.rs","d2s_intrinsics.rs","digit_table.rs","f2s.rs","f2s_intrinsics.rs","lib.rs"]]],\
["same_file",["",[],["lib.rs","unix.rs"]]],\
["scopeguard",["",[],["lib.rs"]]],\
["serde",["",[["de",[],["format.rs","ignored_any.rs","impls.rs","mod.rs","seed.rs","size_hint.rs","value.rs"]],["private",[],["de.rs","doc.rs","mod.rs","ser.rs"]],["ser",[],["fmt.rs","impls.rs","impossible.rs","mod.rs"]]],["integer128.rs","lib.rs","macros.rs"]]],\
["serde_derive",["",[["internals",[],["ast.rs","attr.rs","case.rs","check.rs","ctxt.rs","mod.rs","receiver.rs","respan.rs","symbol.rs"]]],["bound.rs","de.rs","dummy.rs","fragment.rs","lib.rs","pretend.rs","ser.rs","this.rs"]]],\
["serde_json",["",[["features_check",[],["mod.rs"]],["io",[],["mod.rs"]],["value",[],["de.rs","from.rs","index.rs","mod.rs","partial_eq.rs","ser.rs"]]],["de.rs","error.rs","iter.rs","lib.rs","macros.rs","map.rs","number.rs","read.rs","ser.rs"]]],\
["shell_words",["",[],["lib.rs"]]],\
["slug",["",[],["lib.rs"]]],\
["smallvec",["",[],["lib.rs"]]],\
["strsim",["",[],["lib.rs"]]],\
["syntect",["",[["highlighting",[],["highlighter.rs","mod.rs","selector.rs","style.rs","theme.rs","theme_set.rs"]],["parsing",[],["mod.rs","parser.rs","regex.rs","scope.rs","syntax_definition.rs","syntax_set.rs"]]],["dumps.rs","easy.rs","escape.rs","html.rs","lib.rs","util.rs","utils.rs"]]],\
["tblgen",["",[],["error.rs","init.rs","lib.rs","record.rs","record_keeper.rs","string_ref.rs","util.rs"]]],\
["terminal_size",["",[],["lib.rs","unix.rs"]]],\
["thiserror",["",[],["aserror.rs","display.rs","lib.rs"]]],\
["thiserror_impl",["",[],["ast.rs","attr.rs","expand.rs","fmt.rs","generics.rs","lib.rs","prop.rs","valid.rs"]]],\
["typed_arena",["",[],["lib.rs"]]],\
["unicode_categories",["",[],["lib.rs","tables.rs"]]],\
["unicode_ident",["",[],["lib.rs","tables.rs"]]],\
["unicode_segmentation",["",[],["grapheme.rs","lib.rs","sentence.rs","tables.rs","word.rs"]]],\
["unindent",["",[],["lib.rs","unindent.rs"]]],\
["utf8parse",["",[],["lib.rs","types.rs"]]],\
["walkdir",["",[],["dent.rs","error.rs","lib.rs","util.rs"]]],\
["xdg",["",[],["base_directories.rs","lib.rs"]]]\
]'));
createSrcSidebar();
