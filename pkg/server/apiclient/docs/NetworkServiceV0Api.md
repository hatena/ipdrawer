# \NetworkServiceV0Api

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateNetwork**](NetworkServiceV0Api.md#CreateNetwork) | **Post** /api/v0/network/{ip}/{mask}/create | 
[**CreatePool**](NetworkServiceV0Api.md#CreatePool) | **Post** /api/v0/network/{ip}/{mask}/pool/create | 
[**DeleteNetwork**](NetworkServiceV0Api.md#DeleteNetwork) | **Post** /api/v0/network/{ip}/{mask}/delete | 
[**DrawIP**](NetworkServiceV0Api.md#DrawIP) | **Get** /api/v0/network/{ip}/{mask}/drawip | 
[**DrawIPEstimatingNetwork**](NetworkServiceV0Api.md#DrawIPEstimatingNetwork) | **Get** /api/v0/drawip | 
[**DrawIP_0**](NetworkServiceV0Api.md#DrawIP_0) | **Get** /api/v0/network/{name}/drawip | 
[**GetEstimatedNetwork**](NetworkServiceV0Api.md#GetEstimatedNetwork) | **Get** /api/v0/network | 
[**GetNetwork**](NetworkServiceV0Api.md#GetNetwork) | **Get** /api/v0/network/{ip}/{mask} | 
[**GetNetwork_0**](NetworkServiceV0Api.md#GetNetwork_0) | **Get** /api/v0/network/{name} | 
[**GetPoolsInNetwork**](NetworkServiceV0Api.md#GetPoolsInNetwork) | **Get** /api/v0/network/{ip}/{mask}/pools | 
[**ListNetwork**](NetworkServiceV0Api.md#ListNetwork) | **Get** /api/v0/network/list | 
[**UpdateNetwork**](NetworkServiceV0Api.md#UpdateNetwork) | **Post** /api/v0/network/update | 


# **CreateNetwork**
> ServerpbCreateNetworkResponse CreateNetwork($ip, $mask, $body)




### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **string**|  | 
 **mask** | **int32**|  | 
 **body** | [**ServerpbCreateNetworkRequest**](ServerpbCreateNetworkRequest.md)|  | 

### Return type

[**ServerpbCreateNetworkResponse**](serverpbCreateNetworkResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **CreatePool**
> ServerpbCreatePoolResponse CreatePool($ip, $mask, $body)




### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **string**|  | 
 **mask** | **int32**|  | 
 **body** | [**ServerpbCreatePoolRequest**](ServerpbCreatePoolRequest.md)|  | 

### Return type

[**ServerpbCreatePoolResponse**](serverpbCreatePoolResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DeleteNetwork**
> ServerpbDeleteNetworkResponse DeleteNetwork($ip, $mask)




### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **string**|  | 
 **mask** | **int32**|  | 

### Return type

[**ServerpbDeleteNetworkResponse**](serverpbDeleteNetworkResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DrawIP**
> ServerpbDrawIpResponse DrawIP($ip, $mask, $poolTagKey, $poolTagValue, $name, $temporaryReserved)




### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **string**|  | 
 **mask** | **int32**|  | 
 **poolTagKey** | **string**|  | [optional] 
 **poolTagValue** | **string**|  | [optional] 
 **name** | **string**|  | [optional] 
 **temporaryReserved** | **bool**|  | [optional] 

### Return type

[**ServerpbDrawIpResponse**](serverpbDrawIPResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DrawIPEstimatingNetwork**
> ServerpbDrawIpResponse DrawIPEstimatingNetwork($poolTagKey, $poolTagValue, $temporaryReserved)




### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poolTagKey** | **string**|  | [optional] 
 **poolTagValue** | **string**|  | [optional] 
 **temporaryReserved** | **bool**|  | [optional] 

### Return type

[**ServerpbDrawIpResponse**](serverpbDrawIPResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DrawIP_0**
> ServerpbDrawIpResponse DrawIP_0($name, $ip, $mask, $poolTagKey, $poolTagValue, $temporaryReserved)




### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**|  | 
 **ip** | **string**|  | [optional] 
 **mask** | **int32**|  | [optional] 
 **poolTagKey** | **string**|  | [optional] 
 **poolTagValue** | **string**|  | [optional] 
 **temporaryReserved** | **bool**|  | [optional] 

### Return type

[**ServerpbDrawIpResponse**](serverpbDrawIPResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetEstimatedNetwork**
> ServerpbGetNetworkResponse GetEstimatedNetwork()




### Parameters
This endpoint does not need any parameter.

### Return type

[**ServerpbGetNetworkResponse**](serverpbGetNetworkResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetNetwork**
> ServerpbGetNetworkResponse GetNetwork($ip, $mask, $name)




### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **string**|  | 
 **mask** | **int32**|  | 
 **name** | **string**|  | [optional] 

### Return type

[**ServerpbGetNetworkResponse**](serverpbGetNetworkResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetNetwork_0**
> ServerpbGetNetworkResponse GetNetwork_0($name, $ip, $mask)




### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**|  | 
 **ip** | **string**|  | [optional] 
 **mask** | **int32**|  | [optional] 

### Return type

[**ServerpbGetNetworkResponse**](serverpbGetNetworkResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetPoolsInNetwork**
> ServerpbGetPoolsInNetworkResponse GetPoolsInNetwork($ip, $mask)




### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **string**|  | 
 **mask** | **int32**|  | 

### Return type

[**ServerpbGetPoolsInNetworkResponse**](serverpbGetPoolsInNetworkResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListNetwork**
> ServerpbListNetworkResponse ListNetwork()




### Parameters
This endpoint does not need any parameter.

### Return type

[**ServerpbListNetworkResponse**](serverpbListNetworkResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UpdateNetwork**
> ServerpbUpdateNetworkResponse UpdateNetwork($body)




### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelNetwork**](ModelNetwork.md)|  | 

### Return type

[**ServerpbUpdateNetworkResponse**](serverpbUpdateNetworkResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

