// Code generated by protoc-gen-go. DO NOT EDIT.
// source: client.proto

package confproto

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type RequestId struct {
	Texto                string   `protobuf:"bytes,1,opt,name=texto,proto3" json:"texto,omitempty"`
	Pais                 string   `protobuf:"bytes,2,opt,name=pais,proto3" json:"pais,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RequestId) Reset()         { *m = RequestId{} }
func (m *RequestId) String() string { return proto.CompactTextString(m) }
func (*RequestId) ProtoMessage()    {}
func (*RequestId) Descriptor() ([]byte, []int) {
	return fileDescriptor_014de31d7ac8c57c, []int{0}
}

func (m *RequestId) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RequestId.Unmarshal(m, b)
}
func (m *RequestId) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RequestId.Marshal(b, m, deterministic)
}
func (m *RequestId) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RequestId.Merge(m, src)
}
func (m *RequestId) XXX_Size() int {
	return xxx_messageInfo_RequestId.Size(m)
}
func (m *RequestId) XXX_DiscardUnknown() {
	xxx_messageInfo_RequestId.DiscardUnknown(m)
}

var xxx_messageInfo_RequestId proto.InternalMessageInfo

func (m *RequestId) GetTexto() string {
	if m != nil {
		return m.Texto
	}
	return ""
}

func (m *RequestId) GetPais() string {
	if m != nil {
		return m.Pais
	}
	return ""
}

type ReplyInfo struct {
	Info                 string   `protobuf:"bytes,1,opt,name=info,proto3" json:"info,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ReplyInfo) Reset()         { *m = ReplyInfo{} }
func (m *ReplyInfo) String() string { return proto.CompactTextString(m) }
func (*ReplyInfo) ProtoMessage()    {}
func (*ReplyInfo) Descriptor() ([]byte, []int) {
	return fileDescriptor_014de31d7ac8c57c, []int{1}
}

func (m *ReplyInfo) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ReplyInfo.Unmarshal(m, b)
}
func (m *ReplyInfo) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ReplyInfo.Marshal(b, m, deterministic)
}
func (m *ReplyInfo) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ReplyInfo.Merge(m, src)
}
func (m *ReplyInfo) XXX_Size() int {
	return xxx_messageInfo_ReplyInfo.Size(m)
}
func (m *ReplyInfo) XXX_DiscardUnknown() {
	xxx_messageInfo_ReplyInfo.DiscardUnknown(m)
}

var xxx_messageInfo_ReplyInfo proto.InternalMessageInfo

func (m *ReplyInfo) GetInfo() string {
	if m != nil {
		return m.Info
	}
	return ""
}

func init() {
	proto.RegisterType((*RequestId)(nil), "confproto.requestId")
	proto.RegisterType((*ReplyInfo)(nil), "confproto.replyInfo")
}

func init() {
	proto.RegisterFile("client.proto", fileDescriptor_014de31d7ac8c57c)
}

var fileDescriptor_014de31d7ac8c57c = []byte{
	// 156 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xe2, 0x49, 0xce, 0xc9, 0x4c,
	0xcd, 0x2b, 0xd1, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0xe2, 0x4c, 0xce, 0xcf, 0x4b, 0x03, 0x33,
	0x95, 0x4c, 0xb9, 0x38, 0x8b, 0x52, 0x0b, 0x4b, 0x53, 0x8b, 0x4b, 0x3c, 0x53, 0x84, 0x44, 0xb8,
	0x58, 0x4b, 0x52, 0x2b, 0x4a, 0xf2, 0x25, 0x18, 0x15, 0x18, 0x35, 0x38, 0x83, 0x20, 0x1c, 0x21,
	0x21, 0x2e, 0x96, 0x82, 0xc4, 0xcc, 0x62, 0x09, 0x26, 0xb0, 0x20, 0x98, 0xad, 0x24, 0x0f, 0xd2,
	0x56, 0x90, 0x53, 0xe9, 0x99, 0x97, 0x06, 0x56, 0x90, 0x99, 0x97, 0x06, 0xd3, 0x05, 0x66, 0x1b,
	0xb9, 0x72, 0xb1, 0xa7, 0xa7, 0x96, 0x80, 0xa5, 0xad, 0xb8, 0xb8, 0x8a, 0x52, 0x4b, 0x4a, 0x8b,
	0xf2, 0xc0, 0x3c, 0x11, 0x3d, 0xb8, 0xe5, 0x7a, 0x70, 0x9b, 0xa5, 0x50, 0x45, 0xa1, 0x06, 0x2b,
	0x31, 0x38, 0xf1, 0x45, 0xf1, 0xe8, 0xe9, 0x5b, 0xc3, 0xe5, 0x92, 0xd8, 0xc0, 0x94, 0x31, 0x20,
	0x00, 0x00, 0xff, 0xff, 0xf2, 0x69, 0xb8, 0xc0, 0xd0, 0x00, 0x00, 0x00,
}
