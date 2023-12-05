#[derive(Clone, Debug)]
pub enum VariadicKind {
    Simple {
        seen_variable_length: bool,
    },
    SameSize {
        variable_length_count: usize,
        preceding_simple_count: usize,
        preceding_variadic_count: usize,
    },
    AttrSized {},
}

impl VariadicKind {
    pub fn new(variable_length_count: usize, same_size: bool, attr_sized: bool) -> Self {
        if variable_length_count <= 1 {
            VariadicKind::Simple {
                seen_variable_length: false,
            }
        } else if same_size {
            VariadicKind::SameSize {
                variable_length_count,
                preceding_simple_count: 0,
                preceding_variadic_count: 0,
            }
        } else if attr_sized {
            VariadicKind::AttrSized {}
        } else {
            unimplemented!()
        }
    }
}
