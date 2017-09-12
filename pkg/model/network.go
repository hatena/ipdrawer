package model

func (n *Network) HasTag(tag *Tag) bool {
	for _, t := range n.Tags {
		if t.Key == tag.Key && t.Value == tag.Value {
			return true
		}
	}
	return false
}
