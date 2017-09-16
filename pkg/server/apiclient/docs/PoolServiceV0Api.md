# \PoolServiceV0Api

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetIPInPool**](PoolServiceV0Api.md#GetIPInPool) | **Get** /api/v0/pool/{range_start}/{range_end}/ip | 
[**ListPool**](PoolServiceV0Api.md#ListPool) | **Get** /api/v0/pool/list | 


# **GetIPInPool**
> ServerpbGetIpInPoolResponse GetIPInPool($rangeStart, $rangeEnd)




### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rangeStart** | **string**|  | 
 **rangeEnd** | **string**|  | 

### Return type

[**ServerpbGetIpInPoolResponse**](serverpbGetIPInPoolResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListPool**
> ServerpbListPoolResponse ListPool()




### Parameters
This endpoint does not need any parameter.

### Return type

[**ServerpbListPoolResponse**](serverpbListPoolResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

